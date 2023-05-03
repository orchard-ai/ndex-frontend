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
        <input
            className="bg-ndex-input w-full h-10 pr-2 pl-2 pt-1 pb-1 border-ndex-input-border rounded-lg"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            form={form}
        />
    )
}

export default Input;