import Model from '../Components/Model.jsx';
import Create from '../Components/Create.jsx';
import Preview from '../Components/Preview.jsx';

export function dashboardLoader() {
  // This function is empty, we will add any necessary logic here.
}

export async function dashboardAction({ request }) {
  /* 

  const data = await request.formData();
  const { ...values } = Object.fromEntries(data);
  console.log(values.newImage.name + "Uploaded");

  data.append("file", values.newImage, values.newImage.name);

  const requestOptions = {
    method: 'POST',
    body: data
  };
  const afterFetch = (newRes) => {
    console.log(newRes.filename + "Translating...");
    const translatingObject = {
      "UpdateLanguage": "no",
      "TargetLanguage": "hindi",
      "ImageName": newRes.filename
    };

    fetch("http://127.0.0.1:8000/translate", {
      method: 'POST',
      body: JSON.stringify(translatingObject),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(function(response){
      console.log(response);
      console.log(response.Originaltext);
      console.log(response.Translatedtext);
      if(response){
        setText(response)
      }
    }) 
  };

  fetch("http://127.0.0.1:8000/UploadImages/", requestOptions)
    .then(response => response.json())
    .then(function (response) {
      console.log(response);
      console.log(response.filename+"Object created");
      afterFetch(response);
    });

  return data; */
}

function Dashboard() {

  return (
    <div>
      <Model />
      <Create />
      <Preview />
    </div>
  );
}

export default Dashboard;
