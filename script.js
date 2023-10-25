var arr = [
    {
        dp: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1682687220801-eef408f95d71?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1695925077080-dbfc7441a64b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D",
        story: "https://plus.unsplash.com/premium_photo-1694547926001-f2151e4a476b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1681245769078-c9f9d6d3bdfd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D",
        story: "https://plus.unsplash.com/premium_photo-1696495683055-dae4291351f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1681819542543-2ae77de189eb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzd8fHxlbnwwfHx8fHw%3D",
        story: "https://images.unsplash.com/photo-1696814543800-6bc4112e50e1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDR8fHxlbnwwfHx8fHw%3D"
    },
];

var clutter = "";
var storiyan = document.querySelector("#storiyan");
var fullscreen = document.querySelector("#full-screen");

arr.forEach(function (elem, index) {
    clutter += `<div class="story">
                    <img id="${index}" src="${elem.dp}" alt="">
                </div>`;
})

storiyan.innerHTML = clutter;

storiyan.addEventListener('click', (dets) => {
    fullscreen.style.display = "block";
    fullscreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function () {
        fullscreen.style.display = "none";
    }, 2000);
});

var postarr = [
    {
        pp: "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D",
        username: "sahimbehlim",
        post_img: "https://plus.unsplash.com/premium_photo-1694547926001-f2151e4a476b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
    },
    {
        pp: "https://plus.unsplash.com/premium_photo-1695925077080-dbfc7441a64b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D",
        username: "ayankhan",
        post_img: "https://plus.unsplash.com/premium_photo-1696495683055-dae4291351f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        pp: "https://plus.unsplash.com/premium_photo-1681245769078-c9f9d6d3bdfd?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzJ8fHxlbnwwfHx8fHw%3D",
        username: "hujefkhan",
        post_img: "https://images.unsplash.com/photo-1696814543800-6bc4112e50e1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDR8fHxlbnwwfHx8fHw%3D"
    }
];

var postcard = document.querySelector("#post-card");
var clutter2 = "";

postarr.forEach(function (elem2, index2) {
    clutter2 += `<div id="post">
                    <div class="head">
                        <img id="${index2}" src="${elem2.pp}" alt="">
                        <p>${elem2.username}</p>
                    </div>
                    <div class="body">
                        <div class="post-img">
                            <img id="${index2}" src="${elem2.post_img}" alt="">
                        </div>
                        <div class="icons">
                            <i class="ri-heart-3-line" title="img"></i>
                            <i class="ri-chat-3-line"></i>
                            <i class="ri-share-forward-line"></i>
                        </div>
                    </div>
                </div>`;
})

postcard.innerHTML = clutter2;