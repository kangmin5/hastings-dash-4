


// ** https://github.com/woohyeonjo/ilovecat-javascript/tree/master/src

interface Props{
  $target: HTMLElement;
  keywords: string[];
  onSearch: (keyword: string) => void;
  onRandom: () => void;

}
export default class SearchBoxMole {
    recent: string[];
    onSearch: (keyword: string) => void;
    onRandom: () => void;
    section: HTMLElement;



    constructor({$target, keywords, onSearch, onRandom}: Props) {
        this.recent = keywords;
        this.onSearch = onSearch;
        this.onRandom = onRandom;
        this.section = document.createElement('section');
        this.section.className = 'searching-section';

        $target.appendChild(this.section);

        this.render();

        this.focusOnSearchBox();
    }

    focusOnSearchBox() {
        const searchBox: HTMLInputElement | null = document.querySelector('.search-box');
        searchBox?.focus();
    }

    addRecentKeyword(keyword: string) {
        if(this.recent.includes(keyword)) return;
        if(this.recent.length == 5) this.recent.shift();

        this.recent.push(keyword);

        // setItem('keywords', this.recent);

        this.render();
    }
    searchByKeyword(keyword: string) {
        if(keyword.length == 0) return;
        this.addRecentKeyword(keyword);
        this.onSearch(keyword);
    }

    deleteKeyword(){
        const searchBox = document.querySelector('.search-box');
        (searchBox as HTMLInputElement).value = '';
    }

    render() {
        this.section.innerHTML = '';

        const randomBtn = document.createElement('span');
        randomBtn.className = 'random-btn';
        randomBtn.innerText = '🐱';

        const wrapper = document.createElement('div');
        wrapper.className = 'search-box-wrapper';

        const searchBox = document.createElement('input');
        searchBox.className = 'search-box';
        searchBox.placeholder = '고양이를 검색하세요.';

        const recentKeywords = document.createElement('div');
        recentKeywords.className = 'recent-keywords';

        this.recent.map( function (keyword: string)  {
            const link = document.createElement('span');
            link.className = 'keyword';
            link.innerText = keyword;

            link.addEventListener('click', () => { () => searchByKeyword(keyword); });

            recentKeywords.appendChild(link);
        });

        randomBtn.addEventListener('click', this.onRandom);
        searchBox.addEventListener('focus', this.deleteKeyword);
        searchBox.addEventListener('keyup', event => {
            if(event.keyCode == 13){
                this.searchByKeyword(searchBox.value);
            }
        });


        wrapper.appendChild(searchBox);
        wrapper.appendChild(recentKeywords);
        this.section.appendChild(randomBtn);
        this.section.appendChild(wrapper);
    }
}
function searchByKeyword(keyword: string) {
  throw new Error('Function not implemented.');
}

