import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function app() {
    return (
        <>
            <div className="col-lg-12">
                <div className="flex justify-center items-center">
                    <div className="col-lg-6">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>Hover</TooltipTrigger>
                                <TooltipContent>
                                    <p>Add to library</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>


                    </div>
                </div>
            </div>
        </>
    )
}