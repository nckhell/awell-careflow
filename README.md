
  # Nick Github Synced Pathway
  
  ## Overview
  This repository contains the components of _Nick Github Synced Pathway_ care-flow. Care-Flows, also known as care plans, clinical workflows, care pathways, or clinical protocols, are sequences of activities performed by the care team and/or the patient to achieve or maintain a desired health state for the patient.
  
  In the Awell platform, 'care flows' and 'pathways' are used interchangeably to describe these processes.
  
  ## Anatomy of a Care-Flow
  At design-time, Care-Flows consist of tracks, steps, and actions. These elements represent the hierarchy of a Care-Flow in the Awell Platform, where each level aids in creating a comprehensive and structured workflow for healthcare processes.
  
  ### Components of a Care-Flow
  The repository is organized into several folders, each representing a different component of a Care-Flow. Below is an overview of what each folder contains:
  
  - **Actions**: The most granular building block in a Care-Flow. Actions define what needs to be done and by whom. They can be stakeholder-actionable actions (like forms) or system actions (like calculations or API calls).
  
  - **API Calls**: Contains definitions of external API calls that are part of the Care-Flow.
  
  - **Data Point Definitions**: Holds the definitions of various data points used within the Care-Flow.
  
  - **Forms**: Includes the forms required in the Care-Flow for data input or interaction.
  
  - **Labels**: Contains labels used for categorizing or marking different parts of the Care-Flow.
  
  - **Messages**: Stores predefined messages or communication templates used in the Care-Flow.
  
  - **Pathways**: The high-level structure of a Care-Flow, outlining the sequence and connection of steps and actions.
  
  - **Questions**: Contains questions that may be asked during the Care-Flow, often part of forms or decision-making processes.
  
  - **Rules**: Defines the rules or logic that govern the flow of the Care-Flow, like conditional branching.
  
  - **Settings**: Holds configuration settings specific to the Care-Flow.
  
  - **Stakeholders**: Lists the different stakeholders or user roles involved in the Care-Flow.
  
  - **Steps**: Represents the individual steps within a track of a Care-Flow.
  
  - **Timings**: Contains information related to the timing aspects of the Care-Flow, like scheduling or time-based triggers.
  
  - **Tracks**: Broad categorizations or groupings of steps in a Care-Flow.
  
  - **Transitions**: Details the transitions between different states or stages of the Care-Flow.
  
  - **Triggers**: Defines the triggers that initiate or advance stages within the Care-Flow.
  
  ## Additional Documentation
  For more detailed information on the structure and usage of each component in the context of a Care-Flow, please refer to our comprehensive [Care-Flow Documentation](https://developers.awellhealth.com/awell-orchestration/docs/getting-started/what-is-awell-orchestration).
    