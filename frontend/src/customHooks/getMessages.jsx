import axios from "axios";
import { useEffect } from "react";
import { serverUrl } from "../main";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const GetMessage = () => {
  const dispatch = useDispatch();
  const { userData, selectedUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchMessages = async () => {
      // ✅ Fix: prevent error when selectedUser is null
      if (!selectedUser?._id) return;

      try {
        let result = await axios.get(
          `${serverUrl}/api/message/get/${selectedUser._id}`,
          { withCredentials: true }
        );
        dispatch(setMessages(result.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMessages();
  }, [selectedUser, userData, dispatch]);

  return null; // ✅ component runs side-effects only, no UI
};

export default GetMessage;
