import PageHeader from '../../../components/ui/PageHeader';
import type { WelcomeHeaderProps } from '../../../utils/utils';

const WelcomeHeader = ({ teacherName }: WelcomeHeaderProps) => {
  return (
    <PageHeader
      title={`Welcome, ${teacherName}`}
      description="Create new assessments or manage existing workflows."
    />
  );
};

export default WelcomeHeader;