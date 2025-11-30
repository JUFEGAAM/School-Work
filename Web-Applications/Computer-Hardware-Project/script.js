document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.getElementById('carouselContainer');
    
    const mainPhotoPath = 'images/PC-MainPhoto.png'; 
    const randomFolderPath = 'images/RANDOM-PHOTOS/'; 

    const randomFilesList = [
        "IMG_20251124_090438792.jpg","IMG_20251124_090502513.jpg","IMG_20251124_090509195.jpg","IMG_20251124_090517212.jpg",
        "IMG_20251124_090523377.jpg","IMG_20251124_090536461.jpg","IMG_20251124_090652115.jpg","IMG_20251124_090957359.jpg",
        "IMG_20251124_091001868.jpg","IMG_20251124_091316973.jpg","IMG_20251124_091332770.jpg","IMG_20251124_091342397.jpg",
        "IMG_20251124_091352188.jpg","IMG_20251124_091537888.jpg","IMG_20251124_091546639.jpg","IMG_20251124_091604631.jpg",
        "IMG_20251124_091612547.jpg","IMG_20251124_092522816.jpg","IMG_20251124_092530711.jpg","IMG_20251124_092553744.jpg",
        "IMG_20251124_092601525.jpg","IMG_20251124_092614801.jpg","IMG_20251124_092624385.jpg","IMG_20251124_093305072.jpg",
        "IMG_20251124_093315891.jpg","IMG_20251124_093535166.jpg","IMG_20251124_093607136.jpg","IMG_20251124_093624017.jpg",
        "IMG_20251124_093656767.jpg","IMG_20251124_093821735.jpg","IMG_20251124_093900326.jpg","IMG_20251124_093906850.jpg",
        "IMG_20251124_093927884.jpg","IMG_20251124_100153949.jpg","IMG_20251124_100159340.jpg","IMG_20251124_100203954.jpg",
        "IMG_20251124_100208473.jpg"
    ];

    randomFilesList.sort(() => Math.random() - 0.5);
    const selectedFiles = randomFilesList.slice(0, 10);

    let carouselHTML = `
        <div class="carousel-item active">
            <img src="${mainPhotoPath}" class="d-block" alt="Main PC Rig">
        </div>
    `;

    selectedFiles.forEach(filename => {
        carouselHTML += `
            <div class="carousel-item">
                <img src="${randomFolderPath + filename}" class="d-block" alt="Component detail">
            </div>
        `;
    });

    carouselContainer.innerHTML = carouselHTML;
});
