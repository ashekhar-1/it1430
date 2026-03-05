document.addEventListener('DOMContentLoaded', function(){

    // 1. Selecting the DOM Element we need to work with
    const searchForm_ = document.querySelector('form');
    const searchInput_ = document.getElementById('searchInput');
    const galleryItems_ = document.querySelectorAll('.gallery-item');

    // 2. Function to perfrom the filtering
    function filterImages(){
        // Get text, lowercase it, and remove spaces
        const query = searchInput_.value.toLowerCase().trim();

        galleryItems_.forEach(item => {
            /** 
             * data-category= animal, city, nature defined in index.html
             *      animal = ["cat", "cheetah", "lion"]
             *      city = ["New York", "San Francisco"]
             *      nature = ["Mountains", "Beach"]
            */
           // Get the category stored in the data attribute
           const category = item.getAttribute('data-category');

           // Search the caption text
           const caption = item.querySelector('figcaption').innerText.toLowerCase();

           // Check if the category OR caption contains the search text
           if (category.includes(query) || caption.includes(query)) {
                // Show the item (default display)
                item.style.display = '';
           }
           else {
                // Hide the item
                item.style.display = 'none';
           }
        });
    }

    // 3. Event Listener: Run filter whenevr the user types (Real time search)

    // 4. Event Listener: Hnadle the "Search" button / Enter key
})