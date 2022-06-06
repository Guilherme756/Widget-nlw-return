import{ useState } from "react";

import { CloseButton } from "../CloseButton";

import ideiaImageUrl from "../../images/ideia.png";
import outrosImageUrl from "../../images/outros.png";
import problemaImageUrl from "../../images/problema.png";
import { FeedbackTypeStep } from './Step/FeedbackTypeStep';
import { FeedbackContentStep } from "./Step/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Step/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: problemaImageUrl,
            alt: 'Imagem de alguém pensando'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
        source: ideiaImageUrl,
            alt: 'Imagem de uma lampada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
        source: outrosImageUrl,
            alt: 'Imagem de 3 pontos'
        },
    },
  };  

 export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                   {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
               <FeedbackContentStep 
               feedbackType={feedbackType}
               onFeedbackRestartRequested={handleRestartFeedback}
               onFeedbackSent={() => setFeedbackSent(true)}
               />
            )}
                </>
            ) }
           <footer className="text-xs text-neutral-400">
               Feito com ♡ pelo <a className="underline underline-offset-2" href="https://www.linkedin.com/in/guilherme-rodrigues-4162a9207/">Guilherme</a>
           </footer>
        </div>
    );
}