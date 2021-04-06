

    // import html from 'snabby';
    import html from 'https://cdn.skypack.dev/snabby?min';
  
    // possibly extract out reusable code to a base element MyBaseElement extends HTMLElement
    // attaching shadow dom might be good candidate for base element
    export default class MyHeroExperience extends HTMLElement {
    
        constructor (el) {
            console.log('what did you construct ', el)
            super();
            console.log('created MyHeroExperience ');
            this.attachShadow({mode: 'open'});
    
            const d = document.createElement('div');
            this.currentVnode = d;
            this.shadowRoot.appendChild(d);
    
        }

        _getMyHero (id) {
            return document.querySelector(`my-hero-experience[productid="${id || this._model.productid}"]`);
        }
    
        _update () {
            const newVnode = this._view(this._model, () => this._update());
            this.currentVnode = html.update(this.currentVnode, newVnode);
        }
    
        connectedCallback () {
            console.log('we are connected');
            // TODO in the event we need my data - we may not have it passed into the constructor
            // maybe a function on my.getHeroData or something used by the init function would work
            // this._model = this._init(this._model);
            // this._update();
        }
    
        attributeChangedCallback (name, oldValue, newValue) {
            console.log('attribute changed ', name, oldValue, ' new value ', newValue);
    
            if (name === 'product-id') {
                console.log('would we change hero data for product-id ', newValue);
                this._model = this._init({productid: newValue});

                // this._model.productid = newValue;
                // const myHero = this._getMyHero();
                // if (myHero) {
                //     this._model.resetStyles = {
                //         position: myHero.style.position,
                //         width: myHero.style.width,
                //         height: myHero.style.height,
                //         top: myHero.style.top,
                //         left: myHero.style.left
                //     }
                // }
                
            } else if (name === 'ec-json') { // there really is no else, on instantiation all the attributes are registered as changed - listen for the one that matters and update all?
                // call for data and async await
            } 
    
            this._update();
        }
    
        static get observedAttributes () { return [ 'product-id', 'ec-json' ]; }
    
        static registerCustomModule () { window.customElements.define('my-hero-experience', MyHeroExperience); }
    
    
        _init (configs) {
            console.log('initialized');
            // initialize ribbon or hotspots or modal
            // would return that model instead
            // return experience.init(configs);

            const myHero = this._getMyHero(configs.productid);
            const model = {
                productid: configs.productid,
                fullscreenPosition: '',
                canExpandWidth: false,
                canExpandHeight: false,
                
            };

            if (myHero) {
                // reset normal view styles
                model.resetStyles = {
                    position: myHero.style.position,
                    width: myHero.style.width,
                    height: myHero.style.height,
                    top: myHero.style.top,
                    left: myHero.style.left,
                    'z-index': myHero.style['z-index']
                };

                // myHero.style['min-width'] =  model.resetStyles.width;
                // myHero.style['min-height'] =  model.resetStyles.height;

                model.fullscreenPosition = myHero.getAttribute('fullscreen-position');
                model.fullscreenZindex = myHero.getAttribute('fullscreen-zindex');
                model.canExpandHeight = myHero.getAttribute('can-expand-height');
                model.canExpandWidth = myHero.getAttribute('can-expand-width');

                model.heroReferenceSelector = myHero.getAttribute('hero-reference-selector');
               
                myHero.style['overflow-y'] = model.canExpandHeight ? 'visible' : 'auto';
                myHero.style['overflow-x'] = model.canExpandWidth ? 'visible' : 'auto';

            }
            return  model;
        }
    
        _view (model) {
            console.log('view called');
            // might do some logic in the init function or attributeChanged to discover which experience ribbon, hotspots, modal
            // return experience.view(this._model, this._update);
            const style = `
                .my-custom-element {
                    display: grid;
                    color: red;
                    /*background: black;*/
    
                    border: solid black 2px;
                    width: calc(100% - 2px);
                    min-width: calc(100% - 2px);
                    height: calc(100% - 2px);
                    min-height: calc(100% - 2px);
    
                    z-index: 5;
                }
                .my-custom-element--item {
                    margin: 10px;
                    width: 40px;
                    height: 40px;
                    background-color: blue;
                }
                .my-custom-element--item-view {
                    position: absolute;
                    top: 64px;
                    width: 99%;
                    min-width: 99%;
                    height: 99%;
                    min-height: 99%;
                    background: white;
                    
                    overflow: scroll;
                }
                .my-custom-element--item-view-expands-height-width {
                    transition: height 0.5s ease, width 0.7s ease;
                    overflow: visible;
                }
                .my-custom-element--item-view-expands-width {
                    transition: width 0.7s ease;
                    overflow-x: visible;
                }
                .my-custom-element--item-view-expands-height {
                    transition: height 0.5s ease;
                    overflow-y: visible;
                }
                .my-custom-element--item-view-fullscreen {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: white;
                    overflow: auto;
                }
    
                .my-custom-element-col-2 {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }
                .my-custom-element--top-left {
    
                }
                .my-custom-element--top-right {
                    display: grid;
                    justify-content: end;
                    justify-self: end;
                   /*margin-right: 0px;*/

                   cursor: pointer;
                }
                .my-custom-element--bottom-left {
                    display: grid;
                    align-self: end;
                }
                .my-custom-element--bottom-right {
                    display: grid;
                    justify-content: end;
                    justify-self: end;
                    align-self: end;
                    /*margin-right: 0px;*/
                }
                .my-custom-element--center {
                    display: grid;
                    justify-items: center;
                    align-self: center;
                    
                }
    
                .my-ribbon {
                   /* display: grid; */
                    width: auto;
                    height: 64px;
                    position: absolute;
                }
                .my-ribbon-icon {
                    width: 64px;
                    height: 64px;
                    background-color: green;
                    position: absolute;
                    cursor: pointer;
                }

                .my-ribbon-items {
                    display: flex;
                    width: 0px;
                    transition: width 0.2s ease;
                    position: absolute;
                    background-color: grey;
                    
                }
                .my-ribbon-items .my-custom-element--item {
                    cursor: pointer;
                }
    
            `;
    
            const iconWidth = 40;
            const iconHeight = 40;
            const iconFgColor = 'white';
            const collapsedWidth = '64px';
            const ribbonIconColor = '#3071a9'; // '#565758'
            const leftDisplay = '64px';
            const leftHidden = '-200px';
            

            this._model.items = [{widgetId:1},{widgetId:2},{widgetId:3}];
            const itemsWidth = `${this._model.items.length * 50}px`;// '150px';

     
            const _createRibbonItems = () => {
                // return widget items
                // <div class="my-custom-element--item"
                // @on:click="${() => _displayItem(1)}"></div>
                // <div class="my-custom-element--item"
                // @on:click="${() => _displayItem(2)}"></div>
                // <div class="my-custom-element--item" 
                // @on:click="${() => _displayItem(3)}"></div>

                return this._model.items.map((item) => {
                    return html`<div class="my-custom-element--item"
                        @on:click="${() => _displayItem(item.widgetId)}">
                    </div>`;
                });
            };
    
            const _toggleRibbon = () => {
                console.log('my toggle')
                this._model.ribbonVisible = !this._model.ribbonVisible;

                if (!this._model.ribbonVisible) return _closeItem();

                this._update();
            };
    
            const _displayItem = (itemId) => {
                // we would go get the model item and corresponding widget display
                // but here we are going to take up the space given to us
                console.log('my display item')
                if (itemId === this._model.displayItem) {
                    return _closeItem();
                }

                _closeItem();
                this._model.displayItem = itemId;
                this._update();
    
            };
    
            const _toggleItemFullScreen = () => {
                this._model.isFullscreen = !this._model.isFullscreen;
                this._viewFullScreen();

                this._update();
            };
    
            const _closeItem = () => {
                // report if you will this._model.displayItem
                this._model.displayItem = null;
                this._update();
            };
    
    
    
            const _renderItem = () => {
                // would take this._model.displayItem and its data to display
                // look up and instantiate
                /**
                 *   @style:width"${!this._model.isFullscreen && this._model.canExpandWidth ? 'auto' : '' }"
                    @style:height"${!this._model.isFullscreen && this._model.canExpandHeight ? 'auto' : '' }"
                 */
                let transitionClass = ' my-custom-element--item-view-expands-';
                transitionClass += this._model.canExpandWidth && this._model.canExpandHeight ? 'height-width' : this._model.canExpandHeight ? 'height' : this._model.canExpandWidth ? 'width' : 'false';
                return html`<div class="my-custom-element--item-view${this._model.isFullscreen ? '-fullscreen' : ''}${transitionClass}"
                    @style:width="${!this._model.isFullscreen && this._model.canExpandWidth ? 'auto' : '' }"
                    @style:height="${!this._model.isFullscreen && this._model.canExpandHeight ? 'auto' : '' }">

                    <div class="my-custom-element-col-2">
                        <div class="my-custom-element--top-left my-custom-element--item">Top Left</div>
                        <div class="my-custom-element--top-right my-custom-element--item"
                        @on:click="${_toggleItemFullScreen}">fullscreen</div>
                    </div>
    
                    <div class="my-custom-element--center"

                    >
                        <div class="my-custom-element--center my-custom-element--item"
                        
                            @style:height="1000px"
                            @style:width="1000px">
                            ${this._model.displayItem}-Center-${this._model.displayItem}
                        </div>
                    </div>
                    <div class="my-custom-element-col-2">
                        <div class="my-custom-element--bottom-left my-custom-element--item">Bottom Left</div>
                        <div class="my-custom-element--bottom-right my-custom-element--item">Bottom Right</div>
                    </div>
                </div>
                `;
            };
    
            
            
            
            return html `
                <div class="my-custom-element">
                    <style>${style}</style>
                    <div class="my-ribbon"
                        @style:width="${this._model.ribbonVisible ? itemsWidth : collapsedWidth}">
                        <div class="my-ribbon-icon"
                            @on:click="${_toggleRibbon}">
                           
                        </div>
                        
                        <div class="my-ribbon-items"
                            @style:left="${this._model.ribbonVisible ? leftDisplay : leftHidden }"
                            @style:width="${this._model.ribbonVisible ? itemsWidth : '0px'}">

                            ${_createRibbonItems()}
                        </div>
                    
                        
                    </div>
                    ${this._model.displayItem ? _renderItem() : ''}
                </div>
            `;
        }

        _viewFullScreen () {
            const myHero = this._getMyHero();

            if (myHero) {
                if ( this._model.isFullscreen) {
                    myHero.style.position = this._model.fullscreenPosition; //'absolute';
                    myHero.style.width = '100%';
                    myHero.style.height = '100%';
                    myHero.style.top = '0';
                    myHero.style.left = '0';
                } else {
                    Object.keys(this._model.resetStyles).forEach((s) => {
                        myHero.style[s] = this._model.resetStyles[s];
                    });
                }
                
            }
        }
    
        _destroy () {
            this._model = null;
        }
    }
    
    window.customElements.define('my-hero-experience', MyHeroExperience);

    function confirmScriptMyHero () {
        console.log('we got confirmation');

		return html`<div>Yes WE Got It</div>`
        
	}

    confirmScriptMyHero();
    