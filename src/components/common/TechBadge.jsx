export default function TechBadge({ text }) {
    return (
        <span className="inline-block px-4 py-2 bg-primary-50 border border-primary-500 text-primary-600 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors">
            {text}
        </span>
    );
}
