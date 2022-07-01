import { atom, useRecoilState, useResetRecoilState } from "recoil";

import { RecoilAtomKey } from "constants/appConstants";
import { GetDatabaseItemDetailsReponse } from "types/items";

interface SideNavActionInterface {
  id: string;
  type: string;
  action?: string;
  a_id: string;
}

const showSideNavState = atom({
  key: RecoilAtomKey.showSideNav,
  default: false,
});

const showFilterPopupState = atom({
  key: RecoilAtomKey.showFilterPopup,
  default: false,
});

const showQueryPopupState = atom({
  key: RecoilAtomKey.showQueryPopup,
  default: false,
});

const sideNavActionState = atom({
  key: RecoilAtomKey.sideNavAction,
  default: {
    type: "add",
    id: "",
  } as SideNavActionInterface,
});

const dbItemDetailsState = atom({
  key: RecoilAtomKey.dbItemDetails,
  default: {} as GetDatabaseItemDetailsReponse,
});

export const useDatabaseState = () => {
  const [showSideNav, setShowSideNav] = useRecoilState(showSideNavState);
  const resetShowSideNavState = useResetRecoilState(showSideNavState);

  const [showFilterPopup, setShowFilterPopup] =
    useRecoilState(showFilterPopupState);
  const resetShowFilterPopupState = useResetRecoilState(showFilterPopupState);

  const [showQueryPopup, setShowQueryPopup] =
    useRecoilState(showQueryPopupState);
  const resetShowQueryPopupState = useResetRecoilState(showQueryPopupState);

  const [sideNavAction, setSideNavAction] =
    useRecoilState<SideNavActionInterface>(sideNavActionState);
  const resetSideNavActionState = useResetRecoilState(sideNavActionState);

  const [dbItemDetails, setDbItemDetails] =
    useRecoilState<GetDatabaseItemDetailsReponse>(dbItemDetailsState);
  const resetDbItemDetailsState = useResetRecoilState(dbItemDetailsState);

  const changeSideNavStatus = (
    type: string,
    action: string,
    id?: string,
    a_id?: string
  ) => {
    setSideNavAction((currVal) => {
      let newId = id !== undefined ? id : currVal.id;
      let newAId = a_id !== undefined ? a_id : "";
      return {
        type: type, //Kiểu side-nav ( Thêm mới hay (xem chi tiết + cập nhật) )
        action: action, //Loại form trong type (xem chi tiết + cập nhật) gồm: read + update
        id: newId, // item_id
        a_id: newAId,
      };
    });
  };

  const resetDatabaseState = () => {
    resetShowSideNavState();
    resetShowFilterPopupState();
    resetShowQueryPopupState();
    resetSideNavActionState();
    resetDbItemDetailsState();
  };

  return {
    showSideNav,
    setShowSideNav,
    showFilterPopup,
    setShowFilterPopup,
    showQueryPopup,
    setShowQueryPopup,
    sideNavAction,
    setSideNavAction,
    changeSideNavStatus,
    dbItemDetails,
    setDbItemDetails,
    resetDatabaseState,
  };
};
