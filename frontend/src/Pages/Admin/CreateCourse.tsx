import Footer from "../../Components/Footer";
import SideBar from "../../Components/SideBar";
import { useState, useEffect,useRef } from "react";
import { categoryType } from "../../utils/intrfaces";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createCourse } from "../../redux/action/courseAction";
import SmallLoader from "../../Components/SmallLoader";
import toast from "react-hot-toast";
import { colorTogglerOnBlur, colorTogglerOnFocused } from "../../utils/toggleFunctions";

const CreateCourse = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [createdBy, setCreatedBy] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [avatar, setAvatar] = useState<File>();
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const titleInputRef = useRef<HTMLDivElement>(null);
  const descInputRef = useRef<HTMLDivElement>(null);
  const createorInputRef = useRef<HTMLDivElement>(null);
  const selectInputRef = useRef<HTMLSelectElement>(null);

  const dispatch = useAppDispatch();
  const { error, message, loading } = useAppSelector((state) => state.course);

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    const fileReader = new FileReader();
    setAvatar(file);

    fileReader.onloadend = () => {
      setAvatarPreview(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  };

  const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.append("title", name);
    myForm.append("description", description);
    myForm.append("createdBy", createdBy);
    myForm.append("category", category);

    if (avatar) {
      myForm.append("file", avatar); // it wil throw an error if it was of type object why bcoz file is a blob type
    }

    dispatch(createCourse(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, dispatch]);

  return (
    <>
      <div className="grid grid-cols-1fr-5fr max-[800px]:grid-cols-1fr">
        <SideBar />

        <div>
          <h1 className="font-bold font-roboto text-3xl tracking-wider text-center mt-5">
            Create A C<span className="text-mainColor">ourse</span>
          </h1>

          <div className="min-h-[30Vw] w-[25%] m-auto mt-5 p-2 max-[800px]:w-4/6">
            <form onSubmit={submitHanlder}>
              <label className="font-semibold block mb-1">Title</label>
              <div
                className={`flex border border-solid border-color3 p-1 rounded`}
                ref={titleInputRef}
              >
                <svg
                  className={`w-7 h-7 text-color3 dark:text-white`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                <input
                  type="text"
                  name="Title"
                  required
                  onFocus={() => colorTogglerOnFocused(titleInputRef)}
                  onBlur={() => colorTogglerOnBlur(titleInputRef)}
                  placeholder="Title"
                  className="outline-none text-base ml-3 font-thin w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <label className="font-semibold block mt-2">Description</label>
              <div className="flex border border-solid border-color3 p-1 rounded"
              ref={descInputRef}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6  text-color3"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>

                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  required
                  onFocus={() => colorTogglerOnFocused(descInputRef)}
                  onBlur={() => colorTogglerOnBlur(descInputRef)}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="outline-none text-base ml-3 font-thin w-full"
                />
              </div>
              <label className="font-semibold block mt-2">Creator</label>
              <div className="flex border border-solid border-color3 p-1 rounded" 
               ref={createorInputRef}
              >
                <svg
                  className="w-6 h-6 text-color3 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                </svg>
                <input
                  type="text"
                  name="Creator"
                  placeholder="Creator"
                  value={createdBy}
                  onFocus={() => colorTogglerOnFocused(createorInputRef)}
                  onBlur={() => colorTogglerOnBlur(createorInputRef)}
                  required
                  onChange={(e) => setCreatedBy(e.target.value)}
                  className="outline-none text-base ml-3 font-thin w-full"
                />
              </div>

              <label className="font-semibold block mt-2">
                Choose Category:
              </label>

              <select
                className={`outline-none border border-solid border-color3 p-1 rounded w-full`}
                ref={selectInputRef}
                onFocus={() => colorTogglerOnFocused(selectInputRef,true)}
                onBlur={() => colorTogglerOnBlur(selectInputRef,true)}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryType.map((item, i) => (
                  <option className=" outline-none" value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>

              <label className="font-semibold block mt-2">Choose Poster</label>
              <input
                type="file"
                accept="image/*"
                name="avatar"
                className="w-full p-2 fileUploader"
                onChange={fileHandler}
              />

              {avatarPreview && (
                <div className="w-full h-[50%] rounded  flex justify-center my-2">
                  <img
                    className="object-cover w-[50%] h-[100%] rounded"
                    src={avatarPreview}
                    alt=""
                  />
                </div>
              )}

              <button
                className="flex items-center justify-center w-[100%] group hover:border text-lg  bg-mainColor2 hover:bg-white tracking-wide text-white hover:text-mainColor2 hover:border-mainColor2 px-[12px] py-[6px] rounded font-roboto self-end transition duration-300 ease-in-out"
                disabled={loading}
              >
                {loading ? (
                  <SmallLoader />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white dark:text-white group-hover:text-mainColor2 mr-1"
                  >
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path>
                  </svg>
                )}
                Create Course
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CreateCourse;
