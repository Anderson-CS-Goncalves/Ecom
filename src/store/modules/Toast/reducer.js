import produce from 'immer';

const INITIAL_STATE = {
    type: null,
    message: null,
    iconName: '',
    duration: 4000,
    show: false,
}

export default function toast(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@toast/SHOW': {
                draft.type = action.payload.type;
                draft.message = action.payload.message;
                draft.iconName = action.payload.iconName;
                draft.duration = action.payload.duration;
                draft.show = true;
                break;
            }
            case '@toast/HIDE': {
                draft.type = null;
                draft.message = null;
                draft.iconName = '';
                draft.duration = 4000;
                draft.show = false;
                break;
            }
            default:
        }
    });
}