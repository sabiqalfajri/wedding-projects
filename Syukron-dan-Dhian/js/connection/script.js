import { db } from "./firebase.config.js";
import { 
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy
 } from "firebase/firestore";


function capitalizeWord(str) {
    str = str.trim().toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function initCommentSection() {
const form = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');
const template = document.getElementById('template');

const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const presenceSelect = document.getElementById('presence');

const errorName = document.getElementById('errorName');
const errorMessage = document.getElementById('errorMessage');
const errorPresence = document.getElementById('errorPresence');

const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('span');

const cancelReplyBtn = document.getElementById("cancelReplyBtn");
let replyToId = null;
let replyToName = "";

function resetFormState() {
    replyToId = null;
    replyToName = "";
    messageInput.placeholder = "Tulis Ucapan dan Doa";
    cancelReplyBtn.classList.add('d-none');
    presenceSelect.classList.remove('d-none');
    errorName.textContent = "";
    errorMessage.textContent = "";
    errorPresence.textContent = "";
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Form submitted')

    errorName.textContent = "";
    errorMessage.textContent = "";
    errorPresence.textContent = "";

    const name = capitalizeWord(nameInput.value);
    const message = capitalizeWord(messageInput.value);
    const presence = presenceSelect.value.trim();

    let isValid = true;

    if(name.length < 2) {
        errorName.innerHTML = `<p class="text-danger m-0">
                                    <i class="fa-solid fa-circle-info fa-sm"></i>
                                    <small>Nama minimal 2 karakter</small>
                                </p>`;
        isValid = false
    }
    if(message.length < 1) {
        errorMessage.innerHTML = `<p class="text-danger m-0">
                                        <i class="fa-solid fa-circle-info fa-sm"></i>
                                        <small>Mohon beri ucapan</small>
                                    </p>`;
        isValid = false
    }
    if(!replyToId && presence !== '1' && presence !== '2') {
        errorPresence.innerHTML = `<p class="text-danger m-0">
                                        <i class="fa-solid fa-circle-info fa-sm"></i>
                                        <small>Mohon pilih kehadiran</small>
                                    </p>`;
        isValid = false
    }

    if(!isValid) return;
    submitBtn.disabled = true;
    btnText.textContent = 'Mengirim...'

    try {
        await addDoc(collection(db, 'comments'), {
            name,
            message,
            presence,
            parentId: replyToId || null,
            createdAt: serverTimestamp()
        })

        form.reset();
        resetFormState();

    } catch(error) {
        console.error('Error:', error);
    } finally {
        submitBtn.disabled = false;
        btnText.textContent = "Kirim"
    }
})

cancelReplyBtn.addEventListener("click", resetFormState)

function getTimeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    const units = [
        { name: "tahun", seconds: 31536000 },
        { name: "bulan", seconds: 2592000 },
        { name: "minggu", seconds: 604800 },
        { name: "hari", seconds: 86400 },
        { name: "jam", seconds: 3600 },
        { name: "menit", seconds: 60 },
        { name: "detik", seconds: 1 },
    ];

    for (const unit of units) {
        const count = Math.floor(seconds / unit.seconds);
        if (count >= 1) {
            return `${count} ${unit.name}${count > 1 ? "" : ""} lalu`;
        }
    }

    return "Baru saja";
}

const q = query(collection(db, "comments"), orderBy('createdAt', 'desc'));
onSnapshot(q, (snapshot) => {
    commentList.innerHTML = "";
    let hadir = 0;
    let tidakHadir = 0;

    const comments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }))

    const topLevel = comments.filter((c) => !c.parentId);
    const replies = comments.filter((c) => c.parentId);
    const totalComment = comments.length;

    topLevel.forEach((data) => {
        const createdAt = data.createdAt?.toDate();
        const formattedDate = createdAt ? getTimeAgo(createdAt) : '';

        if(data.presence === '1') {
            hadir++
        } else if(data.presence === '2') {
            tidakHadir++
        }

        const clone = template.content.cloneNode(true);
        const commentItem = clone.querySelector('.comment-item');

        clone.querySelector('.name').textContent = data.name;
        clone.querySelector('.message').textContent = data.message;
        clone.querySelector('.presence').innerHTML = data.presence === '1' ? `<svg fill="#3D9A61" width="14px" height="14px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#3D9A61"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"></path></g></svg>` : `<svg fill="#D90B12" width="14px" height="14px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 23.6641 52.3985 C 26.6172 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6172 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6172 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6172 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 19.6328 38.5469 C 18.5547 38.5469 17.6407 37.6329 17.6407 36.5313 C 17.6407 36.0156 17.8750 35.5234 18.2266 35.1953 L 25.2110 28.1875 L 18.2266 21.2031 C 17.8750 20.875 17.6407 20.3829 17.6407 19.8438 C 17.6407 18.7656 18.5313 17.8985 19.6328 17.8985 C 20.1719 17.8985 20.6407 18.1094 20.9454 18.4609 L 27.9766 25.4453 L 35.0313 18.4375 C 35.4063 18.0156 35.8516 17.8516 36.3672 17.8516 C 37.4454 17.8516 38.3360 18.7422 38.3360 19.8203 C 38.3360 20.3594 38.1719 20.8047 37.7501 21.1797 L 30.7657 28.1875 L 37.7266 35.1485 C 38.1016 35.5234 38.3126 35.9922 38.3126 36.5313 C 38.3126 37.6329 37.4454 38.5469 36.3438 38.5469 C 35.7813 38.5469 35.2891 38.2891 34.9610 37.9609 L 27.9766 30.9531 L 20.9923 37.9609 C 20.6641 38.3125 20.1719 38.5469 19.6328 38.5469 Z"></path></g></svg>`
        clone.querySelector('.date').textContent = formattedDate;

        const replyBtn = clone.querySelector('.comment-item p.fw-semibold');
        replyBtn.style.cursor = 'pointer';
        replyBtn.addEventListener('click', () => {
            replyToId = data.id;
            replyToName = data.name;
            messageInput.placeholder = `Balas ke ${replyToName}`;
            messageInput.focus();
            presenceSelect.classList.add('d-none');
            cancelReplyBtn.classList.remove('d-none');

            form.scrollIntoView({ behavior: 'smooth'})
        });

        // show replies
        const childReplies = replies.filter((r) => r.parentId === data.id);
        childReplies.forEach((reply) => {
            const createdAt = reply.createdAt?.toDate();
            const formattedDate = createdAt ? getTimeAgo(createdAt) : '';

            const replyDiv = document.createElement('div');
            replyDiv.style.marginLeft = '1.5rem';
            replyDiv.style.borderLeft = '1px solid #FFF';
            replyDiv.style.paddingLeft = '1rem';
            replyDiv.style.paddingRight = '1.5rem';
            replyDiv.style.marginTop = '0.5rem';
            replyDiv.style.width = '100%';
            replyDiv.innerHTML = `
            <div class="d-flex flex-wrap justify-content-between align-items-center w-100">
                <div class="d-flex flex-column justify-content-start align-items-start" style="width: 75%;">
                    <h3 class="font-nunito fw-semibold m-0" style="font-size: 1rem;">${reply.name}</h3>
                    <p class="m-0 font-nunito mt-1" style="font-size: 0.9rem;">${reply.message}</p>
                </div>
                <div class="d-flex justify-content-end align-items-start" style="width: 25%;">
                    <p class="m-0 text-end" style="font-size: 0.7rem;">${formattedDate}</p>
                </div>
            </div>
            `;

            commentItem.appendChild(replyDiv);
        });

        commentList.appendChild(clone)
    });

    document.getElementById('hadirCount').textContent = `${hadir}`;
    document.getElementById('tidakHadirCount').textContent = `${tidakHadir}`;
    document.getElementById('totalCount').textContent = `${totalComment} Comments`;
});

}
