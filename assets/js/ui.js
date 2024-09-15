$(document).ready(function () {
    
    document.addEventListener('DOMContentLoaded',
        function () {
            // 20240720 add script - ley
            const navItems = document
                .querySelectorAll('.st2');

            navItems.forEach(item => {
                item.addEventListener('click',
                    function () {
                        navItems.forEach(navItem => navItem
                            .classList.remove('active'));
                        this.classList.add('active');
                    });
            });
        });

   

});