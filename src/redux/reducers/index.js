import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { HomeReducer } from "./Home";
import { aboutReducer } from "./About";
import { NewsReducer } from "./News";
import { ServceReducer } from "./Service";
import { ConatctReducer } from "./Contact";
import { SiteMasterReducer } from "./SiteMaster";
import langReducer from './../langReducer';

const appReducer = combineReducers({
  authReducer,
  home_reducer: HomeReducer,
  about_reducer: aboutReducer,
  news_reducer: NewsReducer,
  service_reducer: ServceReducer,
  contact_reducer: ConatctReducer,
  master_reducer: SiteMasterReducer,
  langReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
