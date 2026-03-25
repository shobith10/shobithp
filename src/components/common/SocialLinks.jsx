export default function SocialLinks({ links, compact = false }) {
    const getIcon = (platform) => {
        const iconMap = {
            github: "GitHub",
            linkedin: "LinkedIn",
            mail: "Email",
            twitter: "Twitter"
        };
        return iconMap[platform] || platform;
    };

    if (compact) {
        return (
            <div className="flex gap-4 flex-wrap">
                {links.map((link) => (
                    <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors font-medium text-sm"
                    >
                        {getIcon(link.icon)}
                    </a>
                ))}
            </div>
        );
    }

    return (
        <div className="flex gap-6">
            {links.map((link) => (
                <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 transition-colors"
                    title={link.platform}
                >
                    <span className="text-2xl">{getIcon(link.icon)}</span>
                </a>
            ))}
        </div>
    );
}
