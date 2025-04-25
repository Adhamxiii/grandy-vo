export default function Loading() {
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
        <div className="relative w-48 h-48">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="animate-spin rounded-full border-b-2 border-white h-48 w-48" />
            </div>
        </div>
    </div>
    )
}