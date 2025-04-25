const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggles.forEach(item => {
            if (item !== toggle) {
                const otherContent = item.nextElementSibling;
                const otherIcon = item.querySelector(".icon-svg");
                const otherIconBg = item.querySelector(".icon");

                otherContent.classList.add("scale-y-0", "opacity-0");
                otherContent.classList.remove("scale-y-100", "opacity-100");
                setTimeout(() => {
                    otherContent.classList.add("hidden");
                }, 300);

                otherIcon.setAttribute("d", "M12 6v6m0 0v6m0-6h6m-6 0H6");
                otherIconBg.classList.remove("bg-gray-200");
                otherIconBg.classList.add("bg-purple-500");
            }
        });

        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector(".icon-svg");
        const iconBg = toggle.querySelector(".icon");
        const isVisible = !content.classList.contains("hidden");

        if (isVisible) {
            content.classList.add("scale-y-0", "opacity-0");
            content.classList.remove("scale-y-100", "opacity-100");
            setTimeout(() => {
                content.classList.add("hidden");
            }, 300);

            icon.setAttribute("d", "M12 6v6m0 0v6m0-6h6m-6 0H6");
            iconBg.classList.remove("bg-gray-200");
            iconBg.classList.add("bg-purple-500");
        } else {
            content.classList.remove("hidden");
            void content.offsetWidth;
            content.classList.remove("scale-y-0", "opacity-0");
            content.classList.add("scale-y-100", "opacity-100");

            icon.setAttribute("d", "M18 12H6");
            iconBg.classList.remove("bg-purple-500");
            iconBg.classList.add("bg-gray-200");
        }
    });
});