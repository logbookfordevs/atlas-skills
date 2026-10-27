import { useId, useState } from 'react';
import { AtlasLink } from '@/components/AtlasLink';
import { CopyCommand } from '@/components/CopyCommand';
import { baseArt, carriageArt, carriagePosition, stationArt, solids } from './geometry';
import './vendor/iso.css';
import './workflow-anatomy.css';

const stages = [
  { name: 'Refine', title: 'Settle the open questions', input: 'An idea with unresolved choices.', output: 'Agreed behavior, boundaries and decisions.', method: 'Atlas Grill', prompt: '/atlas-grill Help me refine saved dashboard filters. Work through ownership, sharing and empty results with me.', anchor: 'refine' },
  { name: 'Specify', title: 'Give the decisions a home', input: 'The decisions you have agreed.', output: 'A specification you have read and corrected.', method: 'Atlas To Spec', prompt: '/atlas-to-spec Turn our agreed decisions into a local specification I can review.', anchor: 'specify' },
  { name: 'Slice', title: 'Split the spec into useful tickets', input: 'An approved specification.', output: 'Vertical tickets with dependencies and acceptance criteria.', method: 'Atlas To Tickets', prompt: '/atlas-to-tickets Split this approved spec into vertical implementation tickets with acceptance criteria and dependencies.', anchor: 'slice' },
  { name: 'Build & QA', title: 'Work on one ticket in a fresh chat', input: 'One ticket and its linked specification.', output: 'Working code, a tracking record, review findings and a QA report.', method: 'Atlas Implement · Tracking · Atlas Review · Atlas Verify', prompt: 'Implement this ticket and its linked spec. Work test-first and track the implementation. When ready, do a proper QA with atlas-verify and give me a report.', anchor: 'build' },
  { name: 'Accept', title: 'Review the checkpoint yourself', input: 'The implementation diff and recorded evidence.', output: 'Your acceptance, or corrections for the agent to address.', method: 'You · Plannotator when configured', prompt: '', anchor: 'accept' },
];

export function WorkflowAnatomy() {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const stage = stages[selected];
  const isAcceptance = selected === stages.length - 1;

  return <section id="explore-workflow" className="workflow-machine" aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`}>Explore the workflow</h2>
    <p>Select a station to see what goes in, what comes out and how to ask for it. Start wherever your work is ready.</p>
    <figure className="iso workflow-press">
      <div className="workflow-machine-frame">
        <div className="workflow-machine-labels"><span>Fig. 01</span><span>The checkpoint press</span></div>
        <svg className="iso-svg" viewBox="0 0 720 365" role="img" aria-label={`Five document stations and a movable press carriage. Selected station: ${stage.name}.`} data-solids={solids}>
          <g dangerouslySetInnerHTML={{ __html: baseArt }} />
          {stationArt.map((art, index) => <g key={stages[index].name} className="workflow-station" data-selected={selected === index} onClick={() => setSelected(index)} aria-hidden="true" dangerouslySetInnerHTML={{ __html: art }} />)}
          <g className="workflow-carriage" style={{ transform: carriagePosition(selected) }} dangerouslySetInnerHTML={{ __html: carriageArt }} />
        </svg>
        <div className="workflow-machine-labels"><span>Choose a station below</span><span>{String(selected + 1).padStart(2, '0')} / 05 · {stage.name}</span></div>
      </div>
      <div className="workflow-station-controls" role="group" aria-label="Workflow stations">
        {stages.map((item, index) => <button key={item.name} type="button" aria-pressed={selected === index} aria-controls={`${id}-detail`} onClick={() => setSelected(index)}><span aria-hidden="true">0{index + 1}</span>{item.name}</button>)}
      </div>
      <figcaption>A model of the workflow, not live task progress. Move back when a decision or a review calls for another pass. Drawn with <a href="https://github.com/wheresryan22/anatomy">Anatomy</a>.</figcaption>
    </figure>
    <div className="workflow-machine-detail" id={`${id}-detail`}>
      <h3 aria-live="polite">{stage.title}</h3>
      <p className="workflow-machine-method">{stage.method}</p>
      <dl><div><dt>Bring</dt><dd>{stage.input}</dd></div><div><dt>Leave with</dt><dd>{stage.output}</dd></div></dl>
      {stage.prompt && <CopyCommand variant="prompt" label={`${stage.name} figure prompt`} command={stage.prompt} />}
      {isAcceptance && <p>Read the diff and QA report. Leave annotations or ask for corrections, then accept the updated checkpoint when you are satisfied.</p>}
      <div className="workflow-machine-actions">
        <AtlasLink to={`/workflow/#stage-${stage.anchor}`}>Read this step ↓</AtlasLink>
        {isAcceptance && <button type="button" onClick={() => setSelected(3)}>Revisit implementation ↩</button>}
      </div>
    </div>
  </section>;
}
