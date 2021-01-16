const MENU_TOGGLER = "MENU_TOGGLER";

let initialState = {
    menuToggler: false
}

const MenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case "MENU_TOGGLER": {
            if (action.toggled) {
                document.body.style['overflow-y'] = 'hidden';
                document.body.style.position = 'fixed';
            } else {
                document.body.style['overflow-y'] = "scroll";
                document.body.style.position = '';
            }
            return {
                ...state, menuToggler: action.toggled
            }
        }
        default: return state
    }
}


export const SetMenu = (toggled) => {
    return {
        type: MENU_TOGGLER,
        toggled: toggled
    }
}

export default MenuReducer;