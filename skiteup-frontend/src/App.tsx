import { useState } from 'react';
import { IconBox } from './components/ui/IconBox';
import { ConfirmDialog } from './components/ui/ConfirmDialog';
import { Pagination } from './components/ui/Pagination';
import { Loader } from './components/ui/Loader';
import { EmptyState } from './components/ui/EmptyState';

function App() {
    const [open, setOpen] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = 12;
    const [loading, setLoading] = useState<boolean>(false);
    const handleLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };


    return (
        <div className="p-10 space-y-6">

            {/* IconBox Test */}
            <IconBox
                size="md"
                icon={<span>★</span>}
            />

            {/* ConfirmDialog Test */}
            <button
                onClick={() => setOpen(true)}
                className="rounded-lg bg-[#0B3A60] px-4 py-2 text-white"
            >
                Open Dialog
            </button>

            <ConfirmDialog
                open={open}
                title="Delete Project?"
                description="Are you sure you want to delete this project?"
                confirmText="Delete"
                cancelText="Cancel"
                onConfirm={() => {
                    console.log('Confirmed');
                    setOpen(false);
                }}
                onCancel={() => setOpen(false)}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

            <div className="flex flex-col items-center gap-4 py-8">
                <button
                    onClick={handleLoading}
                    className="rounded-lg bg-[#0B3A60] px-5 py-2 text-white"
                >
                    Start Loading
                </button>

                {loading && (
                    <Loader
                        size="md"
                        label="Loading..."
                    />
                )}
            </div>

            <EmptyState
                title="No Projects Found"
            />



        </div>
    );
}

export default App;