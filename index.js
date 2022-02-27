const delay = ms => new Promise(res => setTimeout(res, ms));

const getAllElements = () => {
    let allElements = document.querySelectorAll('.kvgmc6g5  > .hu5pjgll.lzf7d6o1')
    let threeDots = [];
    for (let index = 0; index < allElements.length; index++) {
        if (document.querySelectorAll('.kvgmc6g5  > .hu5pjgll.lzf7d6o1')[index].style.backgroundPosition == '-133px -13px')
            threeDots.push(allElements[index]);
    }

    return threeDots

}

const unLike = async () => {

    const onClick_unlikeBtn = ()=>{
        let unlikeContainer = document.querySelectorAll('.j34wkznp')
        unlikeContainer = unlikeContainer[unlikeContainer.length - 1];
        unlikeContainer.children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].click()

    }

    await delay(5000);

    var threeDotsElements = getAllElements();

    for (let i = 0; i < threeDotsElements.length; i++) {

        await delay(100);
        threeDotsElements[i].click();

        await delay(100);

        try {
            onClick_unlikeBtn();
        } catch (error) {
            await delay(1000);
            onClick_unlikeBtn();
        }

        // remove element
        threeDotsElements[i].parentElement.parentElement.parentElement.parentElement.remove()
    }

    unLike();

}

unLike()
