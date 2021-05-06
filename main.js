import MyHeroExperienceElement from 'hero-element.js';
import html from 'snabby';


const update = () => {
    const newVnode = view(model, update);
    this.currentVnode = html.update(this.currentVnode, newVnode);
}

const view = (model, update) => {
    return  renderApp();
}

function renderApp () {
    const style = `
        .app {
            background-color: brown;
        }
        .page-header,
        .page-footer {
            height: 100px;
            width: 100%;
            background-color: blue;
        }

        button:focus {
            outline: solid 8px brown;
        }
        .reference-clickables button:focus {
            outline-color: blue;
        }
        .menu-button {
            margin: 10px;
        }

        .main-content {
            width: 100%;
        }
        .hero-image-container {
            display: flex;
            height: 500px;
            width: 500px;
            background-color: yellow;
        }
        .hero-thumbs {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            height: 100%;
            width: 100px;
            background-color: blue;
        }
        .hero-thumb {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            width: 50px;
            background: yellow;
        }
        .hero-image {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 400px;
            background-color: green;
        }

        my-hero-experience.my-hero-parent {
            position: relative;
            position: fixed;
            position: absolute;
            
            
            height: 100%;
            width: 100%;
            /*height: inherit;*/
            /*width: inherit;*/
            
            z-index: 20;
        }
    `;

    return html`<div class="app">
        <style>${style}</style>
        <div class="page-header">
            <button class="menu-button"
                aria-label="clickable menu">
                Menu Button
            </button>
        </div>
        <my-hero-experience
            aria-label="product image details"
            class="my-hero-parent" 
            product-id="123" 
            fullscreen-position="fixed" 
            fullscreen-zindex="20012" 
            can-expand-height="true" 
            can-expand-width="true"
            hero-reference-selectors=".hero-image"

            style="overflow: visible;">
        </my-hero-experience>
        <div class="main-content">
            <div class="hero-image-container">
                <div class="hero-thumbs">
                    <div class="hero-thumb">image</div>
                    <div class="hero-thumb">image</div>
                    <div class="hero-thumb">image</div>
                </div>
                <div class="hero-image">image</div>
            </div>
            
        </div>
        <div class="reference-clickables">
            <button class="menu-button" aria-label="ref 1">Product Reference</button>
            <button class="menu-button" aria-label="ref 2">Product Reference</button>
            <button class="menu-button" aria-label="ref 3">Product Reference</button>
        </div>
        <div>
            <p>Just some text and some more controls to see if tab gets here.  
                Not sure what is happening in the real situation but using snabby 
                it is not tabbing into the children div elemnts

            </p>
            <div class="reference-clickables">
                <button class="menu-button" aria-label="ref 4">Reviews</button>
                <button class="menu-button" aria-label="ref 5">Reviews</button>
                <button class="menu-button" aria-label="ref 6">Reviews</button>
            </div>
        </div>
        <div class="page-footer"></div>                
    </div>`;
}




view();
// we could also try to inject the hero experienece instead of creating it in the view...
// stage a hero element and inject the custom experience into that.

MyHeroExperienceElement.registerCustomModule();