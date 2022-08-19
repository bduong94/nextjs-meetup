import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function onAddMeetupHandler(enteredMeetUpData) {
    console.log(enteredMeetUpData);
  }
  return <NewMeetupForm onAddMeetUp={onAddMeetupHandler} />;
}

export default NewMeetUpPage;
