import MyHeroElement from './hero-element.js';
import html from 'snabby';

let currentVnode = document.querySelector('.page-header .instructions');

const model =  MyHeroElement.getFocusControlModel();

const update = () => {
    const newVnode = view(model, update);
    currentVnode = html.update(currentVnode, newVnode);
}

function createInstructions () {
    const _changedFocusControl = (ev) => {
        const val = ev.target.value || 'partialcontrol';
        model.focusControlSelected = val;
        MyHeroElement.setFocusControl(val);

        update();
    };

    const _buildInstructions = () => {
       

        /**<option selected="${model.focusControlSelected === 'fullcontrol'}" value="fullcontrol">Full Focus Control</option>
            <option selected="${model.focusControlSelected === 'nocontrol'}" value="nocontrol">HTML Navigation Only</option>
            <option selected="${model.focusControlSelected === 'partialcontrol'}" value="partialcontrol">Some Focus Control</option> */

        console.log('what is my model ', model)
        return model.selections.reduce((acc, option) => {
            acc.options.push (html`
                <option selected="${model.focusControlSelected === option.value}" value="${option.value}">${option.displayText}</option>
            `);
            
            acc.descriptions.push(html`
                <p 
                    @style:display="${model.focusControlSelected === option.value ? '' : 'none'}">
                    ${option.description}
                </p>`
            );

            return acc;
            
        }, { options: [], descriptions: [] });
    };

    const instructions = _buildInstructions();

    return html`<div class="instructions">
        <p>Select a Focus Control.  Then Review Keyboard Navigation and Keyboard Controls</p>
        <select value="${model.focusControlSelected}"
            @on:change="${(ev) => _changedFocusControl(ev)}">
            ${ instructions.options }
        </select>
        ${instructions.descriptions}
    </div>`;

}



const view = (model, update) => {
    return  createInstructions();
}


update();


