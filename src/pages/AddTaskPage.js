import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import AddTaskSection from "../components/add-task-section/AddTaskSection";

function AddTaskPage() {
  return (
    <>
      <Header />
      <div className="d-md-flex">
        <Sidebar />
        <AddTaskSection />
      </div>
    </>
  );
}

export default AddTaskPage;
