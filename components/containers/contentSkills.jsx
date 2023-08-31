
export default function ContentSkill({icon, nombre, color=''}) {
  return (
    <li>
      <div className="flex flex-col items-center gap-2"> 
        {icon}
        <span className="text-gray-500 mb-3 dark:text-gray-400 capitalize">{nombre}</span>
      </div>
    </li>
  )
}