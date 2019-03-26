import IMAGEMAP from "../Assets/Images/ImageMap";


export const BUTTON_CLICKED = 'BUTTON_CLICKED';
export const CHANGE_IMAGE = 'CHANGE_IMAGE';
export const CHANGE_REDUX_CLICK_BUTTON = 'CHANGE_REDUX_CLICK_BUTTON';


export const INITIAL_STATE = {
    buttonClickMe: "Click Me!",
    imageLink: IMAGEMAP.COVER,
}

export default function reducer(state = INITIAL_STATE, action = {}) {

    let newState = {...state};
    console.log(action);
    console.log("@13");

    switch (action.type) {
    case BUTTON_CLICKED:
        newState.buttonClickMe = "clicked! gss";
        break;
    case CHANGE_IMAGE:
        newState.imageLink = action.imageLink;
        break;
    case CHANGE_REDUX_CLICK_BUTTON:
        newState.buttonClickMe = "sub component changed me!";
        break;
    }

    return newState;

}