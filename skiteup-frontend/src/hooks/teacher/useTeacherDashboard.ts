import { useEffect, useState } from 'react';

const useTeacherDashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API call
    setLoading(false);
  }, []);

  return {
    loading,
  };
};

export default useTeacherDashboard;
