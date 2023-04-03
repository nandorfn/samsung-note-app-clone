import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import NoteRoundedIcon from '@mui/icons-material/NoteRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DriveFileMoveRoundedIcon from '@mui/icons-material/DriveFileMoveRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export default function ListMenu() {
    return (
        <>

            <div>
                <SettingsRoundedIcon className="absolute right-4 top-4" />
            </div>
            <ul className="mt-16 ml-10 text-xl">
                <li className="mb-5">
                    <DescriptionRoundedIcon className="mr-4" />
                    Semua Catatan
                </li>
                <li className="mb-5">
                    <NoteRoundedIcon className="mr-4" />
                    Catatan format lama
                </li>
                <li className="mb-5">
                    <LockRoundedIcon className="mr-4" />
                    Catatan terkunci
                </li>
                <li className="mb-5">
                    <GroupRoundedIcon className="mr-4" />
                    Catatan bersama
                </li>
                <li className="mb-5">
                    <DeleteRoundedIcon className="mr-4" />
                    Sampah
                </li>
                <li className="mb-5">
                    <DriveFileMoveRoundedIcon className="mr-4" />
                    Folder
                </li>
            </ul>
        </>
    );
}