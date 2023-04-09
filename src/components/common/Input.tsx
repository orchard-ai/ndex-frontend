type PropType = {
    value: string
    placeholder: string
    onChange: (value: string) => void
    className?: string
    password?: boolean
    form?: string
}

const Input = ({value, placeholder, onChange, className, password, form} : PropType) => {

    return (
        <input
            className="bg-ndex-input w-full pr-2 pl-2 pt-1 pb-1 border-ndex-input-border"
            type={ password ? "password" : "text"}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            form={form}
        />
    )
}

export default Input;