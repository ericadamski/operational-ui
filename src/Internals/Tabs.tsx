import * as React from "react"
import deprecate from "../utils/deprecate"
import styled from "../utils/styled"

export interface Tab {
  name: string
  children: React.ReactNode
  hidden?: boolean
}

export interface Props {
  tabs: Tab[]
  activeTabName?: string
  onTabChange?: (newTabName: string) => void
  condensed?: boolean
  dark?: boolean
  children: (childrenConfig: { tabsBar: React.ReactNode; activeChildren: React.ReactNode }) => React.ReactNode
}

export interface State {
  activeTab: number
}

export const tabsBarHeight = 40

const TabsBar = styled("div")<{ condensed?: boolean; dark?: boolean }>(({ theme, condensed, dark }) => ({
  display: "flex",
  alignItems: "flex-end",
  height: condensed ? theme.titleHeight : tabsBarHeight,
  color: dark ? theme.color.white : theme.color.text.light,
  ...(condensed ? { paddingLeft: 30 } : {}),
}))

const Tab = styled("div")<{ active?: boolean; condensed?: boolean; dark?: boolean }>(
  ({ theme, active, condensed }) => ({
    color: "currentColor",
    opacity: active ? 1 : 0.8,
    textTransform: "uppercase",
    fontFamily: theme.font.family.main,
    fontSize: theme.font.size.small,
    fontWeight: theme.font.weight.medium,
    padding: `${(condensed ? theme.space.big : theme.space.element) / 2}px ${theme.space.element}px`,
    borderBottom: "2px solid",
    borderBottomColor: active ? "currentColor" : "transparent",
    ":hover": {
      cursor: "pointer",
      opacity: 1,
    },
  }),
)

class Tabs extends React.Component<Props, State> {
  public state = {
    activeTab: 0,
  }

  private onTabClick(index: number) {
    this.setState(() => ({ activeTab: index }))
    if (this.props.onTabChange) {
      this.props.onTabChange(this.props.tabs[index].name)
    }
  }

  private getActiveTab(): number {
    let activeTab: number
    if (this.props.activeTabName) {
      const index = this.props.tabs.findIndex(({ name }) => name === this.props.activeTabName)
      activeTab = index === -1 ? 0 : index
    } else {
      activeTab = this.state.activeTab
    }
    return activeTab
  }

  public render() {
    const activeTab = this.getActiveTab()
    return this.props.children({
      tabsBar: (
        <TabsBar condensed={this.props.condensed} dark={this.props.dark}>
          {this.props.tabs.filter(({ hidden }) => !hidden).map(({ name }, index: number) => (
            <Tab
              condensed={this.props.condensed}
              key={index}
              active={activeTab === index}
              onClick={() => this.onTabClick(index)}
            >
              {name}
            </Tab>
          ))}
        </TabsBar>
      ),
      activeChildren: this.props.tabs[activeTab].children,
    })
  }
}

/**
 * @todo remove deprecation after we merge https://github.com/contiamo/operational-ui/pull/692
 */
export default deprecate<Props>(
  props =>
    process.env.NODE_ENV !== "production" &&
    props.activeTabName &&
    Boolean(props.onTabChange) &&
    Boolean(props.tabs) &&
    Boolean(props.tabs.find(tab => props.activeTabName!.toLowerCase() === tab.name.toLowerCase())) &&
    Boolean(!props.tabs.find(tab => props.activeTabName === tab.name))
      ? [
          "The Page component no longer lowercases the active tab name when passed back through its onTabChange callback.\nNames are passed exactly as they appear in the tab name field.",
        ]
      : [],
)(Tabs)
