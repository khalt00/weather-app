import "./Loader.scss";
export interface LoaderProps {}

export const Loader = (props: LoaderProps) => {
  return (
    <div id="loadingPage">
      <div className="loading__layout">
        <div className="loading__content">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="loading__text mt-4">ワークスペースを初期化しています..</p>
      </div>
    </div>
  );
};
