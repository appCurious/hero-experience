import html from 'snabby';
// import html from 'https://cdn.skypack.dev/snabby?min';

const style = `
    .button {
        height: 100px;
        width: 100px;
    }

    button {
        color: green;
    }

    .button-container {
        display: flex;
        justify-content: space-between;
        height: 60px;
        width: 100%;
    }

    .nav-button-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 50px;

    }

    .nav-button-container button {
        width: 80px;
        background: yellow;
    }



`;

const init = (configs)  => {

    return {
        configs
    };
};

const view = (model) => {
console.log('widget model ', model)
    return html`<div>
        <style>${style}</style>
        <h2> ${model.type} </h2>
        <div class="my-custom-element--center">
            <div class="my-custom-element--center my-custom-element--item"
            
                @style:height="1000px"
                @style:width="1000px">
                <div class="button">
                    <button aria-label="Dummy"
                        @on:click="${() => {}}">
                        Button1
                    </button>
                    ${model.displayItem}-Center-${model.displayItem}
                </div>
                <div class="nav-button-container">
                    <button aria-label="nav left"
                        @on:click="${() => {}}">
                        Button2 navL
                    </button>
                    <button
                        aria-label="nav right"
                        @on:click="${() => {}}">
                        Button3 navR
                    </button>
                </div>
                ${mockTable(model.items)}
            </div>
        </div>
        <div class="button-container">
            <div class="button">
                <button aria-label="Extra Button"
                    @on:click="${() => {}}">
                    Extra Button
                </button>
            </div>
            <div class="button">
                <button aria-label="Extra Button"
                    @on:click="${() => {}}">
                    Extra Button
                </button>
            </div>
            <div class="button">
                <button aria-label="Extra Button"
                    @on:click="${() => {}}"
                    @on:keydown="${ model.navigationController ? (ev) => model.navigationController(ev) : ''}">
                    Extra Button
                </button>
            </div>
        </div>
        <div class="my-custom-element-col-2">
            <div class="my-custom-element--bottom-left my-custom-element--item">Bottom Left</div>
            <div class="my-custom-element--bottom-right my-custom-element--item">Bottom Right</div>
        </div>
    </div>`;
};


function mockTable (items = []) {
    console.log('mockTable ', items)
    const buildHeader = (item) => {
        console.log('what is the item for a header ', item)
        return html`<th>Product-${item.widgetId}</th>`;
    }

    const buildTableBody = () => {
        let headers = [];
        const body = items.map((d) => {
            headers.push(buildHeader(d));
            console.log('what is my header ', headers)
            return html`<td> we could use ${d.description} in our lives </td>`;
        });

        return html`<table>
            <tr>${headers}</tr>
            <tr>${body}</tr>
        </table>
        `;
    };

    return html`<div>
        ${buildTableBody()}
    </div>`;
}


export default { init, view };