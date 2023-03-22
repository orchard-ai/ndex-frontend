import Logo from "components/common/Logo";

type PropType = {
    category: string
    setCategory: (value : string) => void 
    className?: string
}

const Options = ({category, setCategory, className} : PropType) => {
  
    return (
        <div className={`bg-ndex-background-2 pl-8 pr-4 ${className}`}>
          <Logo className="text-4xl text-ndex-text-white mt-2 mb-2" />
          <div>
            <div className="text-ndex-text-grey">
              <b> Personal Settings </b>
            </div>

            <div
            className={`w-100 ${
              category === "account" ? "text-ndex-text-grey" : ""
            }`}
            onClick={() => setCategory("account")}
          >
            Account
          </div>
          <div
            className={`w-100 ${
              category === "connection" ? "text-ndex-text-grey" : ""
            }`}
            onClick={() => setCategory("connection")}
          >
            Connections
          </div>
          <div
            className={`w-100  ${
              category === "search" ? "text-ndex-text-grey" : ""
            }`}
            onClick={() => setCategory("search")}
          >
            Search
          </div>
          </div>
      </div>
    )
}

export default Options;