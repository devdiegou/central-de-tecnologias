import style from "./dashboard.module.scss";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { TechList } from "../../components/TechList/list";
import { CreateTechModal } from "../../components/CreateModal/createModal";
import { TechContext, TechProvider } from "../../providers/TechContext";
import { EditTechModal } from "../../components/EditModal/editModal";

export const DashboardPage = () => {
  const { user } = useContext(UserContext);
  const { logout } = useContext(UserContext);
  const { openCreate, setOpenCreate } = useContext(UserContext);

  const { editingTech } = useContext(TechContext);

  return (
    <>
      <header>
        <div className="container">
          <div className={style.header__container}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="106"
              height="15"
              viewBox="0 0 106 15"
              fill="none"
            >
              <path
                d="M0.186523 14.4308H3.07268V10.5515L4.49243 8.81843L8.23176 14.4308H11.6845L6.55873 6.89211L11.6245 0.779862H8.16511L3.25265 6.79879H3.07268V0.779862H0.186523V14.4308Z"
                fill="#FF577F"
              />
              <path
                d="M17.3639 14.6307C19.8968 14.6307 21.6032 13.3976 22.0031 11.498L19.3769 11.3247C19.0903 12.1045 18.3571 12.5111 17.4106 12.5111C15.9909 12.5111 15.091 11.5713 15.091 10.0449V10.0382H22.0631V9.25836C22.0631 5.77898 19.9568 4.05928 17.2506 4.05928C14.2378 4.05928 12.2848 6.1989 12.2848 9.35834C12.2848 12.6044 14.2112 14.6307 17.3639 14.6307ZM15.091 8.27853C15.151 7.11207 16.0375 6.1789 17.2973 6.1789C18.5304 6.1789 19.3836 7.05875 19.3902 8.27853H15.091Z"
                fill="#FF577F"
              />
              <path
                d="M27.131 8.51182C27.1377 7.19206 27.9242 6.41886 29.0707 6.41886C30.2105 6.41886 30.897 7.16539 30.8903 8.41851V14.4308H33.7298V7.91193C33.7298 5.52569 32.3301 4.05928 30.1971 4.05928C28.6774 4.05928 27.5776 4.80581 27.1177 5.99894H26.9977V4.19259H24.2915V14.4308H27.131V8.51182Z"
                fill="#FF577F"
              />
              <path
                d="M36.2898 14.4308H44.895V12.1645H40.0159V12.0912L44.7217 6.03893V4.19259H36.4632V6.45885H41.3023V6.53217L36.2898 12.7377V14.4308Z"
                fill="#FF577F"
              />
              <path
                d="M47.4417 14.4308H50.2812V4.19259H47.4417V14.4308ZM48.8681 2.87282C49.7146 2.87282 50.4078 2.22627 50.4078 1.43308C50.4078 0.646553 49.7146 0 48.8681 0C48.0282 0 47.335 0.646553 47.335 1.43308C47.335 2.22627 48.0282 2.87282 48.8681 2.87282Z"
                fill="#FF577F"
              />
              <path
                d="M57.597 14.6307C60.1299 14.6307 61.8362 13.3976 62.2362 11.498L59.61 11.3247C59.3234 12.1045 58.5902 12.5111 57.6437 12.5111C56.2239 12.5111 55.3241 11.5713 55.3241 10.0449V10.0382H62.2962V9.25836C62.2962 5.77898 60.1899 4.05928 57.4837 4.05928C54.4709 4.05928 52.5179 6.1989 52.5179 9.35834C52.5179 12.6044 54.4442 14.6307 57.597 14.6307ZM55.3241 8.27853C55.3841 7.11207 56.2706 6.1789 57.5303 6.1789C58.7635 6.1789 59.6166 7.05875 59.6233 8.27853H55.3241Z"
                fill="#FF577F"
              />
              <path
                d="M69.2975 14.4308H72.1837V8.79177H78.0426V14.4308H80.9221V0.779862H78.0426V6.4122H72.1837V0.779862H69.2975V14.4308Z"
                fill="#FF577F"
              />
              <path
                d="M90.1893 10.0715C90.1959 11.4446 89.2561 12.1645 88.2363 12.1645C87.1631 12.1645 86.4699 11.4113 86.4633 10.2049V4.19259H83.6238V10.7114C83.6304 13.1043 85.0302 14.5641 87.0898 14.5641C88.6296 14.5641 89.736 13.7709 90.1959 12.5711H90.3026V14.4308H93.0288V4.19259H90.1893V10.0715Z"
                fill="#FF577F"
              />
              <path
                d="M95.7288 14.4308H98.5283V12.7911H98.6549C99.0482 13.6442 99.908 14.5974 101.561 14.5974C103.894 14.5974 105.714 12.7511 105.714 9.32501C105.714 5.80564 103.814 4.05928 101.568 4.05928C99.8547 4.05928 99.0348 5.0791 98.6549 5.91228H98.5683V0.779862H95.7288V14.4308ZM98.5083 9.31168C98.5083 7.48534 99.2815 6.31888 100.661 6.31888C102.068 6.31888 102.814 7.53866 102.814 9.31168C102.814 11.098 102.054 12.3378 100.661 12.3378C99.2948 12.3378 98.5083 11.138 98.5083 9.31168Z"
                fill="#FF577F"
              />
            </svg>

            <button onClick={logout}>Sair</button>
          </div>
        </div>
      </header>

      <div className={style.info__container}>
        <div className="container">
          <div className={style.user__info}>
            <h2>Olá, {user.name}</h2>

            <p>{user.course_module}</p>
          </div>

          <div className={style.main__div}>
            <div className={style.header__tech}>
              <h3>Tecnologias</h3>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                onClick={() => setOpenCreate(true)}
              >
                <rect
                  x="0.514648"
                  width="32.4853"
                  height="32"
                  rx="4"
                  fill="#212529"
                />
                <path
                  d="M15.9721 21.5625H18.1055V17.3281H22.4041V15.2266H18.1055V11H15.9721V15.2266H11.6814V17.3281H15.9721V21.5625Z"
                  fill="white"
                />
              </svg>
            </div>

            <TechList />
          </div>
        </div>
      </div>
      {editingTech ? <EditTechModal /> : null}
      {openCreate ? <CreateTechModal /> : null}
    </>
  );
};
