import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function onAddMeetupHandler(enteredMeetUpData) {
    console.log(enteredMeetUpData);
  }
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
}

export default NewMeetUpPage;
