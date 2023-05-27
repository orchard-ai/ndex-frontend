type PropType = {
    value: string
    placeholder: string
    onChange: (value: string) => void
    showLabel?: boolean
    className?: string
    type?: string
    form?: string
    showError?: boolean
}

const Input = ({value, placeholder, onChange, showLabel = true, className, showError, type = "text", form} : PropType) => {

    const getAutocomplete = (type : string) => {
        switch(type) { 
            case "text":
                return ""
            case "password":
                return "currrent-password"
            case "email":
                return "email"
            default:
                return ""
        }
    }

    return (
        <div className="flex flex-col w-3/4">
            {showLabel && <label className="text-sm text-ndex-light-text-secondary dark:text-gray-200 font-medium mb-1">{placeholder}</label>}

            <input
                className={`h-10 pr-2 pl-2 pt-1 pb-1 border-ndex-input-border border-2 rounded-lg bg-ndex-light-background-1 text-ndex-light-text-primary
                    dark:bg-transparent
                    dark:text-ndex-dark-text-default
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-200
                    ${showError ? "border-red-400" : "border-ndex-input-border"}
                    `}
                autoComplete={getAutocomplete(type)}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                form={form}
            />
        </div>
    )
}

export default Input;