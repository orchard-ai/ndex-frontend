type PropType = {
    value: string
    placeholder: string
    onChange: (value: string) => void
    className?: string
    type?: string
    form?: string
}

const Input = ({value, placeholder, onChange, className, type = "text", form} : PropType) => {

    return (
        <div className="flex flex-col w-3/4">
            <label className="text-sm text-gray-200 font-medium mb-1">{placeholder}</label>

            <input
                className="bg-ndex-background-1 h-10 pr-2 pl-2 pt-1 pb-1 border-ndex-input-border border-2 rounded-lg"
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                form={form}
            />
        </div>
    )
}

export default Input;