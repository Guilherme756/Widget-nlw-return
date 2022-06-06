import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ 
    onFeedbackRestartRequested 
}: FeedbackSuccessStepProps) {
    return (
        <>
        <header>
            <CloseButton />
        </header>

        <div className="flex flex-col items-center py-10 w-[304px]">
            
         <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
         <path d="M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z" fill="#2F88FF" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
         <path d="M17 24L22 29L32 19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>
      
        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
        type="button"
        onClick={onFeedbackRestartRequested}
        className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >
            Quero enviar outro
        </button>
        </div>
        </>
    )
}