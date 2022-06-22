import {
  CreateHomeDetails,
  CreateHomeFeedbacks,
  CreateHomeLocation,
  CreateHomePartner,
  CreateHomeSlider,
  CreateHomeStep,
  CreateHomeTools,
  CreateSliderCotegory,
  CreateAboutHome,
  CreateAboutSuspention,
  CreateAboutExperiance,
  CreateAboutVehicle,
  CreateAboutProfisson,
  CreateAboutSliders,
  CreateAboutVideo,
  CreateServiceHeader,
  CreateserviceAutoRepairs,
  CreateserviceRepairs,
  CreateNewsHome,
  CreateNewsCategory,
  CreateNewsMain,
  CreateNewsSlider,
  CreateContactHeader,
  CreateContactInfo,
  CreatesitemasterPageInfoes,
} from "./Creat";

export function CreateCategory(setCreateVisible, form, fileUrl, dispatch) {
  const createHandleCancel = () => {
    setCreateVisible(false);
  };

  const createFeedbacks = CreateHomeFeedbacks(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );


  const createDetails = CreateHomeDetails(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createLocation = CreateHomeLocation(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createPortner = CreateHomePartner(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createSlider = CreateHomeSlider(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createTols = CreateHomeTools(form, setCreateVisible, fileUrl, dispatch);
  const createSliderCotegory = CreateSliderCotegory(
    form,
    setCreateVisible,
    dispatch
  );
  const createStep = CreateHomeStep(form, setCreateVisible, fileUrl, dispatch);

  //about
  const createAboutHome = CreateAboutHome(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createAboutVehicle = CreateAboutVehicle(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createAboutExperiance = CreateAboutExperiance(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createAboutSuspention = CreateAboutSuspention(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createAboutProfisson = CreateAboutProfisson(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createAboutSliders = CreateAboutSliders(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createAboutVideo = CreateAboutVideo(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );

  //service
  const createServiceHeader = CreateServiceHeader(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createserviceAutoRepairs = CreateserviceAutoRepairs(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createserviceRepairs = CreateserviceRepairs(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );

  //news
  const createNewsHeader = CreateNewsHome(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createNewsCategory = CreateNewsCategory(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createNewsMains = CreateNewsMain(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createnewsSliders = CreateNewsSlider(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );

  //contact
  const createContactHeader = CreateContactHeader(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  const createContactInfo = CreateContactInfo(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );

  //site
  const createsitemasterPageInfoes = CreatesitemasterPageInfoes(
    form,
    setCreateVisible,
    fileUrl && fileUrl.size <= 5242880 ?  console.log('error') : fileUrl,
    dispatch
  );
  return {
    createFeedbacks,
    createSlider,
    createSliderCotegory,
    createDetails,
    createLocation,
    createTols,
    createPortner,
    createStep,
    createHandleCancel,
    createAboutHome,
    createAboutSuspention,
    createAboutExperiance,
    createAboutVehicle,
    createAboutProfisson,
    createAboutSliders,
    createAboutVideo,
    createServiceHeader,
    createserviceAutoRepairs,
    createserviceRepairs,
    createNewsHeader,
    createNewsCategory,
    createNewsMains,
    createnewsSliders,
    createContactHeader,
    createContactInfo,
    createsitemasterPageInfoes,
  };
}
