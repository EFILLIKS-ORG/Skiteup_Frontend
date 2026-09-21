import PageHeader from "../../../components/ui/PageHeader";

type WelcomeHeaderProps = {
  teacherName: string;
};

const WelcomeHeader = ({
  teacherName,
}: WelcomeHeaderProps) => {
  return (
    <PageHeader
      title={`Welcome, ${teacherName}`}
      description="Create new assessments or manage existing workflows."
    />
  );
};

export default WelcomeHeader;