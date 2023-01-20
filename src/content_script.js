console.log(location.href);

const getTlAsync = () => {
    return new Promise((resolve) => {
        const f = () => {
            const tl = document.querySelector('#accessible-list-1+div>div');
            if (tl === null) {
                setTimeout(f, 100);
                return;
            }
            resolve(tl);
        };
        f();
    });
};

const selectFollowingTab = () => {
    document.querySelectorAll('a[role="tab"]')[1].click();
};

(async() => {
    const tl = await getTlAsync();
    selectFollowingTab();
})();
