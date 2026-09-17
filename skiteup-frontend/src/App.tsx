import { useState } from "react";
import { StudentSidebar, StudentHeader, PageContainer } from "./layouts";

function App() {
    const [studentTab, setStudentTab] = useState("Assessments");

    return (
        <div className="flex min-h-screen bg-[#F4F7FB]">
            {/* Student Sidebar */}
            <StudentSidebar
                activeItem={studentTab}
                onItemClick={(item) => setStudentTab(item)}
            />

            {/* Main Content Area */}
            <div className="flex flex-1 flex-col">
                {/* Student Topbar */}
                <StudentHeader
                    title={studentTab}
                    subtitle={`Viewing ${studentTab} section`}
                    studentName="Tamilarasu K"
                    regNumber="621322104114"
                    avatarInitial="TK"
                />

            </div>
        </div>
    );
}

export default App;
