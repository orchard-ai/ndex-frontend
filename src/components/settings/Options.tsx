import Logo from "components/common/Logo";

type PropType = {
    category: string
    setCategory: (value : string) => void 
    className?: string
}

const Options = ({category, setCategory, className} : PropType) => {
  
    return (
        <div className={`bg-ndex-background-2 pl-4 pr-4 ${className}`}>
          <Logo className="text-4xl text-ndex-text-white mt-2 mb-2" />
          <div
            className={`w-100 ${
              category === "account" ? "active-tab" : ""
            }`}
            onClick={() => setCategory("account")}
          >
            Account
          </div>
          <div
            className={`w-100 ${
              category === "connection" ? "active-tab" : ""
            }`}
            onClick={() => setCategory("connection")}
          >
            Connections
          </div>
          <div
            className={`w-100  ${
              category === "search" ? "active-tab" : ""
            }`}
            onClick={() => setCategory("search")}
          >
            Search
          </div>
      </div>
    )
}

export default Options;