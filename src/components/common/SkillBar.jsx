export default function SkillBar({ name, proficiency }) {
    return (
        <div className="mb-8">
            <div className="flex justify-between mb-2">
                <span className="font-medium text-dark-800">{name}</span>
                <span className="text-primary-500 font-semibold">{proficiency}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-primary-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${proficiency}%` }}
                ></div>
            </div>
        </div>
    );
}
