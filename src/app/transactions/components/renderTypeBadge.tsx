export const RenderTypeBadge = ({ type }: { type: string }) => {
    switch (type) {
        case "Dépense":
            return (
                <span className="inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                    Dépense
                </span>
            );
        case "Revenu":
            return (
                <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    Revenu
                </span>
        )
    }
};