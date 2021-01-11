

let DocumentOutline;

(function()
{
    const menuSvg ="<svg width="24" height="165" viewBox="0 0 24 165" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 11H16V13H4V11ZM4 6H20V8H4V6ZM4 18H11H11.235V16H11H4V18Z" fill="white"/><path d="M5.79403 158.574L5.79403 155.902L13 155.902L13 154.078L5.79403 154.078L5.79403 151.406L4.27273 151.406L4.27273 158.574L5.79403 158.574ZM13 149.8L11.0099 149.152L11.0099 146.003L13 145.355L13 143.378L4.27273 146.386L4.27273 148.764L13 151.777L13 149.8ZM9.5696 148.683L6.26704 147.609L6.26704 147.541L9.5696 146.467L9.5696 148.683ZM13 142.327L13 138.599C13 136.638 11.9773 135.594 10.5881 135.594C9.29687 135.594 8.51704 136.519 8.47017 137.512L8.38494 137.512C8.1804 136.604 7.53693 135.935 6.50994 135.935C5.2017 135.935 4.27273 136.907 4.27273 138.833L4.27273 142.327L13 142.327ZM11.4915 140.482L9.17329 140.482L9.17329 138.935C9.17329 138.049 9.68466 137.499 10.4048 137.499C11.0611 137.499 11.4915 137.947 11.4915 138.978L11.4915 140.482ZM7.92472 140.482L5.7642 140.482L5.7642 139.08C5.7642 138.262 6.18608 137.798 6.81676 137.798C7.5071 137.798 7.92471 138.36 7.92472 139.114L7.92472 140.482ZM13 134.394L13 128.807L11.4787 128.807L11.4787 132.549L4.27273 132.549L4.27273 134.394L13 134.394ZM13 127.585L13 121.687L11.4787 121.687L11.4787 125.74L9.39488 125.74L9.39488 122.007L7.87358 122.007L7.87358 125.74L5.79403 125.74L5.79403 121.705L4.27273 121.705L4.27273 127.585L13 127.585ZM8.63636 109.44C5.78125 109.44 4.15341 111.213 4.15341 113.527C4.15341 115.854 5.78125 117.614 8.63636 117.614C11.4787 117.614 13.1193 115.854 13.1193 113.527C13.1193 111.213 11.4915 109.44 8.63636 109.44ZM8.63636 111.311C10.4858 111.311 11.4872 112.189 11.4872 113.527C11.4872 114.869 10.4858 115.743 8.63636 115.743C6.78693 115.743 5.78551 114.869 5.78551 113.527C5.78551 112.189 6.78693 111.311 8.63636 111.311ZM13 108.074L13 106.228L9.39488 106.228L9.39488 102.679L7.87358 102.679L7.87358 106.228L5.79403 106.228L5.79403 102.295L4.27272 102.295L4.27272 108.074L13 108.074ZM7.32812 90.5763C5.3125 90.8192 4.15341 92.3448 4.15341 94.3647C4.15341 96.6701 5.78125 98.43 8.63636 98.43C11.483 98.43 13.1193 96.6999 13.1193 94.3647C13.1193 92.1275 11.6321 90.7766 10.0256 90.5763L10.017 92.4428C10.9503 92.6175 11.4872 93.3505 11.4872 94.3349C11.4872 95.6602 10.5028 96.5593 8.63636 96.5593C6.82102 96.5593 5.78551 95.6729 5.78551 94.3221C5.78551 93.3121 6.36932 92.5835 7.32812 92.4428L7.32812 90.5763ZM8.63636 81.2333C5.78125 81.2333 4.15341 83.006 4.15341 85.32C4.15341 87.6467 5.78125 89.4066 8.63636 89.4066C11.4787 89.4066 13.1193 87.6467 13.1193 85.32C13.1193 83.006 11.4915 81.2333 8.63636 81.2333ZM8.63636 83.104C10.4858 83.104 11.4872 83.9819 11.4872 85.32C11.4872 86.6623 10.4858 87.5359 8.63636 87.5359C6.78693 87.5359 5.78551 86.6623 5.78551 85.32C5.78551 83.9819 6.78693 83.104 8.63636 83.104ZM4.27272 72.5668L4.27272 74.4034L9.76136 74.4034L9.76136 74.4801L4.27272 78.2472L4.27272 79.8665L13 79.8665L13 78.0213L7.5071 78.0213L7.5071 77.9574L13 74.1605L13 72.5668L4.27272 72.5668ZM5.79403 71.3746L5.79403 68.7028L13 68.7028L13 66.8789L5.79403 66.8789L5.79403 64.207L4.27272 64.207L4.27272 71.3746L5.79403 71.3746ZM13 63.0266L13 57.1289L11.4787 57.1289L11.4787 61.1815L9.39488 61.1815L9.39488 57.4485L7.87357 57.4485L7.87358 61.1815L5.79403 61.1815L5.79403 57.146L4.27272 57.146L4.27272 63.0266L13 63.0266ZM4.27272 48.3793L4.27272 50.2159L9.76136 50.2159L9.76136 50.2926L4.27272 54.0597L4.27272 55.679L13 55.679L13 53.8338L7.5071 53.8338L7.5071 53.7699L13 49.973L13 48.3793L4.27272 48.3793ZM5.79403 47.1871L5.79403 44.5153L13 44.5153L13 42.6914L5.79403 42.6914L5.79403 40.0195L4.27272 40.0195L4.27272 47.1871L5.79403 47.1871ZM6.78266 34.1048L6.78266 32.3363C5.22727 32.3619 4.1534 33.6403 4.1534 35.5835C4.1534 37.4968 5.21022 38.8988 6.79545 38.8903C8.08238 38.8945 8.8196 37.9869 9.17329 36.5124L9.41193 35.5621C9.64204 34.6119 9.91477 34.0835 10.5028 34.0792C11.142 34.0835 11.5767 34.6886 11.5767 35.6261C11.5767 36.5849 11.1335 37.2752 10.2599 37.3349L10.2599 39.1204C12.1477 39.0735 13.1236 37.7227 13.1236 35.6048C13.1236 33.4741 12.1051 32.2212 10.5071 32.217C9.05397 32.2212 8.28266 33.3164 7.94176 34.8335L7.75426 35.6175C7.57954 36.3761 7.29829 37.011 6.67187 36.9982C6.10937 36.9982 5.69602 36.4996 5.69602 35.5962C5.69602 34.7141 6.09659 34.1729 6.78266 34.1048Z" fill="white"/></svg>"
    //const menuSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' style='transform:;-ms-filter:'><path d='M4 11H16V13H4zM4 6H20V8H4zM4 18L11 18 11.235 18 11.235 16 11 16 4 16z'></path></svg>";
    const closeSvg = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' stroke='var(--outline-primary-color)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-minimize-2'><polyline points='4 14 10 14 10 20'></polyline><polyline points='20 10 14 10 14 4'></polyline><line x1='14' y1='10' x2='21' y2='3'></line><line x1='3' y1='21' x2='10' y2='14'></line></svg>";
    const cancelSvg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'> <path data-name='layer1'fill='var(--outline-text-color-light)' d='M51 17.25L46.75 13 32 27.75 17.25 13 13 17.25 27.75 32 13 46.75 17.25 51 32 36.25 46.75 51 51 46.75 36.25 32 51 17.25z'></path></svg>";

    
    DocumentOutline = class DocumentOutline {

        /**
         * @class DocumentOutline
         * @param {Object} options 
         * @param {String} [options.backgroundColor] background color of the outline
         * @param {String} [options.textColor] text color of the first-level sections
         * @param {String} [options.accentColor] accent color of the outline
         * @param {String} [options.textColorLight] text color of the sub sections
         * @param {String} [options.defaultOpen] indicate the initial mode of the outline. Outline is open by default on desktop and closed on mobile.
         */
        constructor({backgroundColor, textColor, textColorLight, accentColor, defaultOpen}={}){
            this._headingMap = [];
            this._parentList = [];
            this._isMobile = window.innerWidth < 780; // mobile & tablet
            this._open = !this._isMobile;

            // set :root variables
            let root = document.documentElement;
            if(backgroundColor){
                root.style.setProperty('--outline-bg-color', backgroundColor);
            }
            if(textColor){
                root.style.setProperty('--outline-text-color', textColor);
            }
            if(accentColor){
                root.style.setProperty('--outline-primary-color', accentColor);
            }
            if(textColorLight){
                root.style.setProperty('--outline-text-color-light', textColorLight);
            }
            if(defaultOpen != undefined){
                this._open = defaultOpen;
            }

            // get heading tags
            const headingList = document.querySelectorAll("h1, h2, h3, h4, h5, h6")
            headingList.forEach(tag => {
                this._headingMap.push({
                    tag,
                    level: Number(tag.tagName[1])
                })
            });

            this._buildOutline();
            this._renderOutline();
        }

        _getParent = level =>{
            for(let i=0; i < this._parentList.length; i++){
                let node = this._parentList[i];
        
                if(node.level < level)
                    return node;
                
                if(node.level === level && node.elem.tagName == 'UL')
                    return node
            }
        }

        _hasSibilings = level => {
            const parent = this._getParent(level);
            const family = this._parentList.slice(0, this._parentList.indexOf(parent)+1);

            for(let i=0; i < family.length; i++){
                let node = family[i];
        
                if(node.level === level)
                    return true;
            }
            return false;
        }

        _buildOutline = () => {
            this._parentList = [{
                elem: document.createElement('ul'),
                level: 0
            }];
            
            for(let i=0; i < this._headingMap.length; i++){
                const level = this._headingMap[i].level;
                const parent = this._getParent(level)
                
                let li = document.createElement('li');
                let span = document.createElement('span');
                let div = document.createElement('div');
                
                // add navigation
                span.innerHTML = this._headingMap[i].tag.innerHTML;    
                span.addEventListener('click', e => {
                    window.scrollTo(0, this._headingMap[i].tag.offsetTop);
                    if(this._isMobile) this.hideOutline();
                    document.getElementsByClassName('outline-search')[0].value = '';
                    this.onSearchInput('')  
                })
                
                // build dom
                div.setAttribute('class','li-content li-title-'+level);
                div.appendChild(span);
                li.appendChild(div);
            
                let node = { elem: li, level};
                if(parent.elem.tagName == 'LI' || !this._hasSibilings(level)){
                    let ul = document.createElement('ul');
                    ul.appendChild(li);
                    node.elem = ul;
                }
                
                // attach to parent
                let container = parent.elem;
                if(parent.elem.tagName == 'UL' 
                    && parent.elem?.childNodes[0]?.tagName == 'LI'
                    && !this._hasSibilings(level)){
                    container = parent.elem.firstChild;
                }

                // attach to list
                container.setAttribute('class','list-head');
                container.appendChild(node.elem);        
                this._parentList.unshift(node);
            }
            
            // save list root
            this._root = this._parentList[this._parentList.length-1].elem;  
            this._root.setAttribute('id','outline-list-root');      
        }
        
        _renderOutline = () => {             
            this._nav = document.createElement('nav');
            this._main = document.createElement('div');

            // menu icon
            this._menuIcon = document.createElement('div');
            this._menuIcon.classList = 'outline-menu-icon-container';
            this._menuMobile = document.createElement('div');
            this._menuMobile.classList.add('outline-mobile-menu-icon-container');

            //this._textMenu = document.createElement('div');
            //this._textMenu.classList = 'outline-menu-text';
            //this._textMenu.innerHTML = 'Table of contents';

            // serachbar
            this._searchbar = document.createElement('input');
            this._searchbar.classList = 'outline-search';  
            this._searchbar.setAttribute('type','text');  
            this._searchbar.setAttribute('placeholder','Search...')
            this._searchbar.addEventListener('keyup', e => this.onSearchInput(e.target.value));
            
            // searchbar container
            this._searchbarContainer = document.createElement('div');
            this._noResults = document.createElement('p');
            this._noResults.innerHTML = 'No results found.';
            this._searchbarContainer.classList.add('outline-search-container');
            this._searchbarContainer.appendChild(this._searchbar);
            this._searchbarContainer.appendChild(this._noResults);

            // header
            this._navHeader = document.createElement('div');
            this._navHeader.classList = 'outline-nav-header';
            this._navHeader.appendChild(this._searchbarContainer);
            this._navHeader.appendChild(this._menuIcon);

            // outline
            this._nav.appendChild(this._navHeader);
            this._nav.classList = 'outline-nav';
            if(!this._open)
                this.hideOutline();

            // add to DOM 
            document.body.removeChild(document.body.childNodes[0]);
            this._main.setAttribute('id','main-document');
            this._nav.appendChild(this._root);
            document.body.appendChild(this._main);
            this._main.appendChild(document.body.childNodes[0])
            document.body.appendChild(this._nav);

            if(this._isMobile || !this._open){
                this._main.appendChild(this._menuMobile);
                this._addIconSvg(this._menuMobile, 'menu');
            }else
                this._addIconSvg(this._menuIcon, 'close');

            this._menuIcon.addEventListener('click', e => {
                if(this._open) this.hideOutline()
                else this.showOutline();
                this._open = !this._open;
            });
            
            this._menuMobile.addEventListener('click', e => {
                this.showOutline()
                this._open = true;
                this._menuMobile.style.display = 'none';
            });
        }
        
        _addIconSvg = (container, icon) => {
            let html = icon === 'menu' ? menuSvg : closeSvg;
            container.innerHTML = html;
            
            if(this._isMobile){
                let svg = document.querySelector('.outline-mobile-menu-icon-container svg');
                if(svg) svg.classList.add('outline-mobile-menu-icon');
            }
        }

        /**
         * @function onSearchInput 
         * @description Called when a search is submitted
         * @param {String} text text to search
         */
        onSearchInput = text => {
            let filter = text.toLowerCase();
            let spans = document.querySelectorAll('.li-content > span');
            let divs = document.querySelectorAll('.li-content');

            let resultsFound = false;
            for (let i = 0; i < spans.length; i++) {
                let txtValue = spans[i].innerText || spans[i].innerHTML;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                  divs[i].style.display = "";
                  resultsFound = true;
                } else {
                  divs[i].style.display = "none";
                }
            }

            if(!resultsFound) 
                this._noResults.style.display = 'block';
            else
                this._noResults.style.display = 'none';

        };

        /**
         * @function showOutline
         * @description Show document outline.
         * On **desktop** the outline is placed aside the main content takes 20% of the width.
         * On **mobile** the outline is placed above the main content and takes 100% of the width.
         */
        showOutline = () => {
            this._menuIcon.style.visibility = 'hidden';
            this._menuIcon.classList.remove('outline-menu-container-collapsed');

            this._navHeader.classList.remove('outline-nav-header-collapsed');
            this._main.classList.remove('no-outline');
            
            this._nav.classList.remove('outline-nav-collapsed')
            if(this._isMobile) document.body.style.overflow = 'hidden';
            
            this._root.style.display = 'block';
            this._root.style.visibility = 'visible';

            setTimeout(() =>{
                this._root.style.opacity = 1
                this._nav.style.overflowY = 'visible';
                this._menuIcon.style.visibility = 'visible';
                this._addIconSvg(this._menuIcon, 'close');
                this._searchbar.style.display = 'block';
            }, 400);
        }

        /**
         * @function hideOutline
         * @description Hide document outline.
         * On **desktop** the outline reduces its width to 3%.
         * On **mobile** the outline disappears completly and a floating button appears in the bottom-left corner.
         */
        hideOutline = () => {
            this._searchbar.style.display = 'none';
            this._menuIcon.style.visibility = 'hidden';
            this._addIconSvg(this._menuIcon, 'menu');
            this._navHeader.classList.add('outline-nav-header-collapsed');

            this._nav.style.overflowY = 'hidden';
            this._nav.classList.add('outline-nav-collapsed');
            this._main.classList.add('no-outline');

            if(this._isMobile) document.body.style.overflow = 'auto';
            this._root.style.visibility = 'hidden';
            this._root.style.opacity = 0;
            
            setTimeout(() => {
                this._root.style.display = 'none';
                this._menuIcon.classList.add('outline-menu-container-collapsed');
                this._menuIcon.style.visibility = 'visible';
                
                if(this._isMobile)
                    this._menuMobile.style.display = 'block';
            }, 350)
            
        }
    }
})();